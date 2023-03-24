import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import {
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react/dist/components/controlComponents'
import { UserButton } from '@clerk/clerk-react/dist/components/uiComponents'
import { SignInButton } from '@clerk/clerk-react/dist/components/SignInButton'
import { useAuth } from '@clerk/clerk-react/dist/hooks/useAuth'
import { useUser } from '@clerk/clerk-react/dist/hooks/useUser'
import ThubLogo from '../public/svg/thub-logo'
// import ChevronIcon from '../public/svg/chevron'
import Bars3Icon from '../public/svg/bars3Icon'
import XMarkIcon from '../public/svg/xmarkicon'
import { headerStatus } from '../lib/helper'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Header2({ mode }) {
  const { isSignedIn } = useAuth()
  const { user } = useUser()

  const [showBanner, setShowBanner] = useState(true)

  // const role = user?.publicMetadata?.role ?? ''
  const contributor = user?.publicMetadata?.contributor || false
  const admin = user?.publicMetadata?.admin || false

  // const newProtocolSection = (
  //   <Link
  //     href="/newProtocol"
  //     className={`-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 ${
  //       !isSignedIn ? 'pointer-events-none opacity-50' : ''
  //     }`}
  //   >
  //     <div className="ml-4">
  //       <p className="text-base font-medium text-gray-900">New Protocol</p>
  //       <p className="mt-1 text-sm text-gray-500">
  //         Create and submit a new entry for a protocol to be listed.
  //       </p>
  //     </div>
  //   </Link>
  // )

  // const myDraftsSection = (
  //   <Link
  //     href="/myDrafts"
  //     className={`-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 ${
  //       !isSignedIn ? 'pointer-events-none opacity-50' : ''
  //     }`}
  //   >
  //     <div className="ml-4">
  //       <p className="text-base font-medium text-gray-900">My Drafts</p>
  //       <p className="mt-1 text-sm text-gray-500">List and edit your drafts.</p>
  //     </div>
  //   </Link>
  // )

  // const allDraftsSection = (
  //   <Link
  //     href="/allDrafts"
  //     className={`-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 ${
  //       !contributor ? 'pointer-events-none opacity-50' : ''
  //     }`}
  //   >
  //     <div className="ml-4">
  //       <p className="text-base font-medium text-gray-900">All Drafts</p>
  //       <p className="mt-1 text-sm text-gray-500">
  //         See all drafts (contributor only).
  //       </p>
  //     </div>
  //   </Link>
  // )

  const calculatorSection = (
    <Link
      href="/calculator"
      className="text-base font-medium text-white hover:text-gray-300"
    >
      Calculator
    </Link>
  )

  const expertsSection = (
    <Link
      href="/experts"
      className="text-base font-medium text-white hover:text-gray-300"
    >
      Experts
    </Link>
  )

  const myDesign = (
    <Link
      href="/myDesigns"
      className="text-base font-medium text-white hover:text-gray-300"
    >
      My Designs
    </Link>
  )

  const newDesign = (
    <Link
      href="/newDesign"
      className="text-base font-medium text-white hover:text-gray-300"
    >
      New Design
    </Link>
  )

  // const tdfRefSection = (
  //   <Link
  //     href="/thub"
  //     className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
  //   >
  //     <div className="ml-4">
  //       <p className="text-base font-medium text-gray-900">
  //         Tokenomics Design Framework
  //       </p>
  //       <p className="mt-1 text-sm text-gray-500">
  //         Get access to our FigJam design template to design your own token.
  //       </p>
  //     </div>
  //   </Link>
  // )

  // const tdfSection = (
  //   <Link
  //     href="/newDesign"
  //     className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
  //   >
  //     <div className="ml-4">
  //       <p className="text-base font-medium text-gray-900">
  //         Tokenomics Design Framework
  //       </p>
  //       <p className="mt-1 text-sm text-gray-500">
  //         Design your own token using our guided framework.
  //       </p>
  //     </div>
  //   </Link>
  // )

  // const tdfMyDesigns = (
  //   <Link
  //     href="/myDesigns"
  //     className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
  //   >
  //     <div className="ml-4">
  //       <p className="text-base font-medium text-gray-900">My Designs</p>
  //       <p className="mt-1 text-sm text-gray-500">
  //         Overview of all your designs.
  //       </p>
  //     </div>
  //   </Link>
  // )

  // const tdfPhaseAdminSection = (
  //   <Link
  //     href="/adminTDFPhase"
  //     className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
  //   >
  //     <div className="ml-4">
  //       <p className="text-base font-medium text-gray-900">Edit TDF Phases</p>
  //       <p className="mt-1 text-sm text-gray-500">admin / contributor only</p>
  //     </div>
  //   </Link>
  // )

  // const tdfCoreMechanismSection = (
  //   <Link
  //     href="/coreMechanisms"
  //     className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
  //   >
  //     <div className="ml-4">
  //       <p className="text-base font-medium text-gray-900">Core Mechanisms</p>
  //       <p className="mt-1 text-sm text-gray-500">TDF Core Mechanisms</p>
  //     </div>
  //   </Link>
  // )

  // const calcTemplateSection = (
  //   <Link
  //     href="/thub"
  //     className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
  //   >
  //     <div className="ml-4">
  //       <p className="text-base font-medium text-gray-900">
  //         Tokenomics Calculation Template
  //       </p>
  //       <p className="mt-1 text-sm text-gray-500">
  //         Calculate distribution, emission, supply & demand drivers and
  //         valuation for your token launch.
  //       </p>
  //     </div>
  //   </Link>
  // )

  // const adminView = (
  //   <Link
  //     href="/adminView"
  //     className={`-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 ${
  //       !admin ? 'pointer-events-none opacity-50' : ''
  //     }`}
  //   >
  //     <div className="ml-4">
  //       <p className="text-base font-medium text-gray-900">Update posts</p>
  //       <p className="mt-1 text-sm text-gray-500">admin only; change authors</p>
  //     </div>
  //   </Link>
  // )

  const fundRaiseBar = (
    <div
      className={`${
        showBanner ? 'm-auto flex items-center bg-dao-green' : 'hidden'
      }`}
    >
      <div className="mx-auto max-w-xl py-3 px-3 sm:px-6 lg:px-8">
        <p className="ml-3 self-center truncate text-center font-medium text-white">
          <span className="inline">🥳 We are fundraising. Interested? </span>
          <a
            href="mailto:contact@tokenomicsdao.com"
            className="hover:underline"
          >
            Contact us.
          </a>
        </p>
      </div>
      <button
        className="text-gray-200"
        onClick={() => {
          setShowBanner(false)
        }}
      >
        <XMarkIcon className="h-6 w-6 text-gray-200" aria-hidden="true" />
      </button>
    </div>
  )

  function renderSwitch() {
    switch (mode) {
      case headerStatus.design:
        return (
          <>
            {myDesign}
            {newDesign}
          </>
        )
      case headerStatus.main:
        return (
          <>
            {calculatorSection}
            {expertsSection}
          </>
        )
      case headerStatus.report:
      default:
        return (
          <>
            {calculatorSection}
            {expertsSection}
          </>
        )
    }
  }

  return (
    <>
      {fundRaiseBar}
      <Popover className="relative bg-dark-tdao">
        <div className="mx-auto max-w-full px-6">
          <div className="flex items-center justify-between py-1 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <ThubLogo />
              <div className="hidden md:ml-2 md:flex md:items-center">
                <p className="text-2xl text-white">Tokenomics Hub</p>
              </div>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-dark-tdao p-2 text-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dao-red">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {renderSwitch()}              
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </div>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-700 rounded-lg bg-dark-tdao shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10">
                    <ThubLogo />
                  </div>
                  <div className="-mr-2 bg-dark-tdao">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-dark-tdao p-2 text-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-20">
                  <nav className="grid gap-y-8">
                  {renderSwitch()} 
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="flex w-full justify-end">
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  )
}
