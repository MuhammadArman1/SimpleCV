export default function contact(){
    return (
        <>
        <h2 className="h2">CONTACT ME</h2>
        <form>
            <label>NAME</label>
            <input type="text" />
            <label>EMAIL</label>
            <input type="email" />
            <label>MESSAGE</label>
            <textarea name="message"></textarea>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}