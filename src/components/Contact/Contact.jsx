import {useState} from 'react';

function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message:'',
    });
    const [errors, setErrors] = useState({});
    
    //Handle input change 
    const  handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    //Validate form on submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if(!formData.name) newErrors.name = 'Name is required';
        if(!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.message) newErrors.message = 'Message is required';

        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0){
            alert('Form submitted successfully!');
        }
    };
    return(
        <section>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                    {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    />
                    {errors.message && <p style={{ color: 'red'}}>{errors.message}</p>}
                </div>
                <button type='submit'>Send Message</button>
            </form>
        </section>
    );
}

export default Contact;