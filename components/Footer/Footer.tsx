import Image from 'next/image'
import goldLine from './../../public/images/Footer/goldLine.png'
import telegram from './../../public/images/Footer/Vector-telegram.png'
import instagram from './../../public/images/Footer/vactor-instagram.png'
import twitter from './../../public/images/Footer/vactor-twitter.png'

export function Footer() {
    return(
        <div className="bg-[#272727] h-[381px] w-1920] flex flex-col gap-4 p-8 justify-between items-center  ">
            <div className="flex gap-8 relative right-[32rem]">
                <Image alt='telegram icon' src={telegram}  />
                <Image alt='instagram icon' src={instagram}  />
                <Image alt='twitter icon' src={twitter}  />
            </div>
            <Image alt='gold line' src={goldLine}  />
            <div className='items-end gap-4 flex flex-col '>
            <div>
                <p className='text-white justify-end flex'>ارتباط با پشتیبانی</p>
                <p className='text-white justify-end flex'>درباره ما</p>
                <p className='text-white'>فروش در سایت مرکزی</p>
            </div>
            <Image alt='gold line' src={goldLine}  />
            <p className='text-white'>آدرس ما : گیلان، رشت، کمربندی بهشتی، بلوار حمیدیان، نرسیده به چهارراه جمهوری، دفتر سایت کل کالا </p>
            <p className='text-white'>01333514049</p>
            <p className='text-white'>09112008902</p>
            </div>
        </div>
    )
}