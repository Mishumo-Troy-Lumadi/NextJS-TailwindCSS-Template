import { Page } from '@components/utilities'
import { Button, Field, Card } from '@troyio/components'
import { AnnotationIcon, AtSymbolIcon } from '@heroicons/react/outline'

export default function Home() {
	return (
		<Page title='Hello World' description='Your First NextJS Page' as='column' className='justify-center items-center'>
			<Card as='column' className='w-96 justify-center items-center p-5 gap-4'>
				<h1>Hello World</h1>
				<Button className='text-sm rounded text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-300' label='Button' icon={<AnnotationIcon className='stroke-1' />} />
				<Field id='email' className='text-neutral-900 border-neutral-500 placeholder-neutral-500 ring-transparent' label='Email' type='email' placeholder='example@email.com' icon={<AtSymbolIcon className='stroke-1' />} />
				<Field id='email-error' error='Invalid Email' className='text-neutral-900 border-neutral-500 placeholder-neutral-500 ring-transparent' label='Email' type='email' placeholder='example@email.com' icon={<AtSymbolIcon className='stroke-1' />} />
				<Field id='email-disabled' disabled className='text-neutral-900 border-neutral-500 placeholder-neutral-500 ring-transparent' label='Email' type='email' placeholder='example@email.com' icon={<AtSymbolIcon className='stroke-1' />} />
			</Card>
		</Page>
	)
}
