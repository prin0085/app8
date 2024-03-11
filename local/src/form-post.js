import React, { useRef, useState } from 'react';

export default function FormPost() {
    let [data, setPostedData] = useState('');
    const form = useRef();

    const onSybmitForm = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current)
        const formEnt = Object.fromEntries(formData.entries());
        fetch('/api/form-post', {
            method: "POST",
            body: JSON.stringify(formEnt),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.text())
            .then(res => setPostedData(res))
            .catch(err => alert(err))
    }

    const inputStyle = {
        margin: '5px 0',
    }

    return (
        <div style={{ margin: '30px' }}>
            <form ref={form} onSubmit={onSybmitForm}>
                <div>ติดต่อเรา</div>
                <input type="text" name="name" size="43" placeholder="ชื่อ"
                    style={inputStyle} /><br />
                <input type="email" name="email" size="43" placeholder="อีเมล"
                    style={inputStyle} /><br />
                <textarea name="message" cols="40" rows="4" placeholder="ข้อความ"
                    style={inputStyle}></textarea><br />
                <button>ตกลง</button>
            </form >
            <br />
            <div dangerouslySetInnerHTML={{ __html: data }}></div>
        </div >
    )
}