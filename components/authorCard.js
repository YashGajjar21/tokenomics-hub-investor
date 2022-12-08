import Link from 'next/link'

export default function AuthorCard({author}) {
    return (
        <>
            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-5">
                <div class="flex justify-end px-4 pt-4">
                </div>
                <div class="flex flex-col items-center pb-10">
                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://i.pravatar.cc/300?img=50" />
                    <h5 class="mb-1 text-xl font-medium text-gray-900">{author?.name}</h5>
                    <span class="text-sm text-gray-500">Tokenomics DAO Contributor</span>
                    <div
                        class="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
                        <span class="text-center px-2">
                            <span class="font-bold text-gray-700">7</span>
                            <span class="text-gray-600"> completed Projects</span>
                        </span>
                        <span class="text-center px-2">
                            <span class="font-bold text-gray-700">10</span>
                            <span class="text-gray-600"> protocols listed</span>
                        </span>
                    </div>
                    <div class="flex">
                        <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Metaverse</span>
                        <span class="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">DeFi</span>
                        <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">DAO</span>
                        <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">ReFi</span>

                    </div>
                    <div class="flex mt-4 space-x-3 md:mt-6">
                        <Link as={`/authors/${author?.slug}`} href="/authors/[slug]" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            See Profile
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}




