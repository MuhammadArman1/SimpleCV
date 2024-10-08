export default function contact(){
    return (
        <>
        <h2 className="text-center mt-16 text-7xl">CONTACT ME</h2>
        <form>
            <label>NAME</label>
            <input type="text" />
            <label>EMAIL</label>
            <input type="email" />
            <label>MESSAGE</label>
            <textarea className="w-80 rounded-lg text-black" name="message"></textarea>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}