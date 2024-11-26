export function RedLine({ isShown }: { isShown: boolean }) {
    return (
        isShown && <div className='mb-[0rem] h-[2px] bg-[#FF0000]'></div>
    )
}