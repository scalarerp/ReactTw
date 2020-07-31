import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
// import { motion } from 'framer-motion'

export const Container = tw.div`relative`
export const ContentWithPaddingXl = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`
export const ContentWithPaddingLg = tw.div`max-w-screen-lg mx-auto py-10 lg:py-10`
export const ContentWithVerticalPadding = tw.div`py-20 lg:py-24`

export const ContentCard = tw.div`flex flex-col h-full bg-gray-200 `

export const Columns = tw.div`
flex flex-wrap overflow-hidden md:-mx-2 lg:-mx-4`

// export const Columns = tw.div`
// flex  flex-col justify-between
// p-0 sm:p-6 md:p-10
// pt-5
// md:flex-row`

export const Column = tw.div`
w-full overflow-hidden 
md:my-5 md:px-10 md:w-1/2 
lg:my-4 `
// export const Column = tw.div`
// flex flex-col  md:px-10`

export const SectionHeading = tw.h2`text-4xl sm:text-5xl font-black tracking-wide text-center`
export const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl`
export const Subheading = tw.h5`font-bold text-primary-500 text-center md:text-left`

export const Title = tw.h4`p-5 uppercase text-2xl text-gray-700 font-bold text-center `
export const TextContent = tw.div`lg:py-8 text-center  md:text-left`
export const Heading = tw(SectionHeading)`
mt-4 font-black text-left text-3xl 
sm:text-4xl 
lg:text-5xl text-center 
md:text-left leading-tight`

export const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-800`

export const Image = styled.img((props) => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
])

export const ImageDivBackground64 = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-64 w-full bg-contain bg-no-repeat bg-center rounded-t-lg `,
])

// export const DecoratorBlob = styled(SvgDotPattern)((props) => [
//   tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`,
// ])
export const PrimaryButton = tw.button`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`
export const PrimaryLink = tw.a`cursor-pointer font-bold text-primary-500 border-b-2 border-transparent hocus:border-primary-500 hocus:text-primary-800 transition duration-300`

export const PrimaryButton8 = styled(PrimaryButton)((props) => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`,
])
