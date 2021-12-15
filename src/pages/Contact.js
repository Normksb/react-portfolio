const Contact = () => {
    return (
        <div class="contact">
        <div class="contact-content">
            <form action="#" class="form">
                <label for="name" class="label">Name</label>
                <input type="text" class="input" id="name" autocomplete="name" placeholder="Name..."/>
                <label for="email" class="label">Email</label>
                <input type="email" class="input" id="email" autocomplete="name" placeholder="Email address..."/>
                <label for="Message" class="label">Message</label>
                <textarea name="message" class="textarea" id="message" cols="50" rows="20" placeholder="Please enter message here..."></textarea>
                <button class="submitbtn" type="submit" value="submit">submit</button>
            </form>
        </div>
    </div>
    )
}

export default Contact;