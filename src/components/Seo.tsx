import * as React from 'react'
import Head from 'next/head'
import {withRouter, Router} from 'next/router'
import {siteConfig} from '../siteConfig'

export interface SeoProps {
  title: string
  description?: string
  image?: string
  children?: React.ReactNode
  isHomePage: boolean
}

const deployedTranslations = ['fr', 'en', 'zh-hans', 'es']

let shouldPreventIndexing = false
if (
  siteConfig.languageCode !== 'fr' &&
  !deployedTranslations.includes(siteConfig.languageCode)
) {
  shouldPreventIndexing = true
}

function getDomain(languageCode: string): string {
  const subdomain = languageCode === 'fr' ? '' : languageCode + '.'
  return subdomain + 'africaconnect.vercel.app'
}

export const Seo = withRouter(
  ({
    title,
    // TODO: Description
    description = 'Description africa connect',
    image = '/images/africa.png',
    router,
    children,
    isHomePage,
  }: SeoProps & {router: Router}) => {
    const siteDomain = getDomain(siteConfig.languageCode)
    const canonicalUrl = `https://${siteDomain}${
      router.asPath.split(/[\?\#]/)[0]
    }`
    const pageTitle = isHomePage ? 'AfricaConnect' : title + ' – Africa Connect'
    return (
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {title != null && <title key="title">{pageTitle}</title>}
        {description != null && (
          <meta name="description" key="description" content={description} />
        )}
        <link rel="canonical" href={canonicalUrl} />
        {shouldPreventIndexing && <meta name="robots" content="noindex" />}
        <meta property="og:type" key="og:type" content="website" />
        <meta property="og:url" key="og:url" content={canonicalUrl} />
        {title != null && (
          <meta property="og:title" content={pageTitle} key="og:title" />
        )}
        {description != null && (
          <meta
            property="og:description"
            key="og:description"
            content={description}
          />
        )}
        <meta
          property="og:image"
          key="og:image"
          content={`https://${siteDomain}${image}`}
        />

        <link
          rel="preload"
          href="/fonts/Source-Code-Pro-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {children}
      </Head>
    )
  }
)
