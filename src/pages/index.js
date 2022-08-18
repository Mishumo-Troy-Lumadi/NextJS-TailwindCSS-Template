import { Page, Toggle } from '@components'
import { Button, Field, Card } from '@troyio/components'
import { AnnotationIcon, AtSymbolIcon } from '@heroicons/react/outline'
import { useToggle } from '@troyio/hooks'

export default function Home() {

	const [state,toggle] = useToggle(true)

	return (
		<Page title='Hello World' description='Your First NextJS Page' as='column' className='items-center justify-center'>
			<Card as='column' className='items-center justify-center gap-4 p-5 w-96'>
				<Toggle onClick={toggle}/>
				<h1>Hello World</h1>
				<Button disabled={state} foreground='text-sm text-white ' background='bg-blue-500 rounded hover:bg-blue-400 active:bg-blue-300' label='Button' icon={<AnnotationIcon className='' />} />
				<Field  disabled={state} id='email' className='text-neutral-900 border-neutral-500 placeholder-neutral-500 ring-transparent' label='Email' type='email' placeholder='example@email.com' icon={<AtSymbolIcon className='stroke-1' />} />
				<Field  disabled={state} id='email-error' error='Invalid Email' className='text-neutral-900 border-neutral-500 placeholder-neutral-500 ring-transparent' label='Email' type='email' placeholder='example@email.com' icon={<AtSymbolIcon className='stroke-1' />} />
				<Field id='email-disabled' disabled className='text-neutral-900 border-neutral-500 placeholder-neutral-500 ring-transparent' label='Email' type='email' placeholder='example@email.com' icon={<AtSymbolIcon className='stroke-1' />} />
			</Card>
		</Page>
	)
}
