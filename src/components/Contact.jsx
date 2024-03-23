const Contact = () => {
    return (
        <div>
            <h1 className="font-semibold text-center">Connect with us <span className="text-xl">📧</span></h1>
            <form action="" className=" flex flex-col w-1/3 my-2 mx-auto gap-2 p-2 outline-none">
                <input className="border border-black p-1" type="text" name="username" id="" placeholder="username" />
                <input className="border border-black p-1" type="email" name="email" id="" placeholder="email id" />
                <textarea className="border border-black p-1" name="" id="" cols="10" rows="3" placeholder="message..."></textarea>
                <button className="w-1/4 mx-auto border border-black p-1 bg-slate-200 rounded-md hover:bg-slate-300">Submit</button>
            </form>
        </div>
    )
}

export default Contact;