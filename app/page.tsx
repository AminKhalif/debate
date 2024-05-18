import Image from "next/image";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
    <header className="px-4 lg:px-6 h-14 flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <Link className="flex items-center justify-center" href="#">
        <MicIcon className="h-6 w-6 text-white" />
        <span className="sr-only">Debate AI</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300 hover:text-yellow-300"
          href="#"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300 hover:text-yellow-300"
          href="#"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300 hover:text-yellow-300"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300 hover:text-yellow-300"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </header>
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 border-y">
        <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Debate with Confidence
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our AI-powered debate assistant helps you research, analyze, and craft compelling arguments. Never be
                caught off guard again.
              </p>
              <div className="space-x-4 mt-6">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Try it Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-100 to-pink-100">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-purple-200 px-3 py-1 text-sm text-purple-800">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Debate with Confidence
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our AI-powered debate assistant provides unbiased analysis, comprehensive research, and strategic
                rebuttal suggestions to help you win any debate.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold text-purple-500">Unbiased Analysis</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our AI analyzes both sides of the debate objectively, helping you identify weaknesses in your
                opponent&#39;s arguments.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold text-purple-500">Comprehensive Research</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Quickly gather relevant facts, statistics, and expert opinions to build a strong case for your
                position.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold text-purple-500">Rebuttal Suggestions</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Get AI-generated suggestions on how to effectively counter your opponent&#39;s arguments and strengthen
                your own position.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gradient bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Hear from real people who have used our AI debate assistant to improve their debating skills.
            </p>
          </div>
          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-purple-200 bg-white p-6 shadow-sm dark:border-purple-800 dark:bg-gray-950">
              <blockquote className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-lg font-medium leading-relaxed">
                  &quot;This AI debate assistant has been a game-changer for me. The unbiased analysis and rebuttal
  suggestions have helped me win several debates.&quot;
                  </p>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium">John Doe</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Debating Club President</div>
                  </div>
                </div>
              </blockquote>
            </div>
            <div className="rounded-lg border border-purple-200 bg-white p-6 shadow-sm dark:border-purple-800 dark:bg-gray-950">
              <blockquote className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-lg font-medium leading-relaxed">
                  &quot;I was struggling to find the right arguments for my debates until I started using this AI
  assistant. It&apos;s a lifesaver!&quot;
                  </p>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.png" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium">Sarah Anderson</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Law Student</div>
                  </div>
                </div>
              </blockquote>
            </div>
            <div className="rounded-lg border border-purple-200 bg-white p-6 shadow-sm dark:border-purple-800 dark:bg-gray-950">
              <blockquote className="flex flex-col justify-between h-full">
                <div>
                  <p className="text-lg font-medium leading-relaxed">
                  &quot;This AI debate assistant has helped me become a more confident and effective debater on topics regarding the Middle East. I highly
  recommend it!&quot;
                  </p>
                </div>
                <div className="mt-4 flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.png" />
                    <AvatarFallback>SK</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium">Shahruk Saeed</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Harvard Debate Team Captain</div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <p className="text-xs text-white">© 2024 Debate AI. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline underline-offset-4 transition-colors duration-300 hover:text-yellow-300"
          href="#"
        >
          Terms of Service
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4 transition-colors duration-300 hover:text-yellow-300"
          href="#"
        >
          Privacy
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4 transition-colors duration-300 hover:text-yellow-300"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </footer>
  </div>
)
}

function MicIcon(props: React.SVGProps<SVGSVGElement>) {
return (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" x2="12" y1="19" y2="22" />
  </svg>
)
}