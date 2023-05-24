import Image from 'next/image'
import RootLayout from './layout'
import {GetServerSideProps} from 'next/types'
import prisma from 'lib/prisma'
import {PostProps} from 'types'

type Props = {
  feed: PostProps[]
}

export default function Home(props: Props) {
  console.log({testDB: props.feed})
  return (
    <RootLayout>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm text-center lg:flex">
          <p className="fixed top-0 left-0 justify-center w-full pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit md:flex lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Pour commencer, éditez le fichier&nbsp;
            <code className="font-mono font-bold">src/pages/index.tsx</code>
          </p>
          <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
              href="#/"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src="/africa.svg"
                alt="Africa Logo"
                className="dark:invert"
                width={90}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className="relative flex place-items-center before:absolute  before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:items-center before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/africa.svg"
            alt="Africa Connect Logo"
            width={250}
            height={37}
            priority
          />
        </div>

        <div className="grid mb-32 text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
      </main>
    </RootLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.post.findMany({
    where: {published: true},
    include: {author: true},
  })
  return {
    props: {feed},
  }
}
