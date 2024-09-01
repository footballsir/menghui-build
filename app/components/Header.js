import '../style.css'
import Link from 'next/link'

export default function Header(props) {
    let header
    if (props.page === true) {
        header = (
            <div className='container flex items-center justify-between relative gap-4'>
                <Link href={'/'} className='flex items-center gap-3'>
                    <div className='w-4 h-4 rounded-full background-a'></div>
                    <div className='text-base font-extrabold color-a'>Home</div>
                </Link>
                <div className='header-title opacity-0 md:opacity-100'>{props.title}</div>
                <div className='flex items-center gap-3 opacity-0'>
                    <div className='w-4 h-4 rounded-full background-a'></div>
                    <div className='text-base font-extrabold color-a'>Home</div>
                </div>
            </div>
        )
    } else {
        header = (
            <div className='container flex items-center'>
                <Link href={'/'} className='flex items-center gap-3'>
                    <div className='w-4 h-4 rounded-full background-a'></div>
                    <div className='text-base font-extrabold color-a'>Home</div>
                </Link>
            </div>
        )
    }

    return (
        <div className="w-full flex items-center justify-center h-10 background-1 border-b border-balck border-opacity-10 z-50 header">
            {header}
        </div>
    );
}