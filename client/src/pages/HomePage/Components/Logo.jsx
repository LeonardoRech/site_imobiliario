export default function Logo() {

    return(
        <div className={`
            mt-28
            flex justify-center items-center
            p-5 border-t  
            bg-gradient-to-b from-yellow-400 to-gray-100 dark:to-neutral-800
        `}>
            <img src='./corso.jpg' alt="logo da home" className="rounded-md h-60" />
        </div>
    )
}