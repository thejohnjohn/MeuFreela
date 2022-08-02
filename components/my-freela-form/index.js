import React, { useState } from 'react';
import { Form } from '@unform/web';

import Input from '../../utils/input.js';
import formatPhoneNumber from '../../utils/phone-number-formatter.js';
import formatFullName from '../../utils/fullname-formatter.js';

import style from './Form.module.css';

export default function MyFreelaForm({formRef, submitForm}){
    let [fullName, setFullName] = useState("");
    let [phoneNumber, setPhoneNumber] = useState("");

    return(
        <Form ref={formRef} className={style.contactForm} onSubmit={submitForm}>
            <div className={style.formInput}>
                <label className={style.label}>Nome completo</label>
                <Input className={style.input} 
                    name="name" 
                    type="text" 
                    placeholder="Ex: Mateus Ávila Isidoro" 
                    value={fullName}
                    onChange={(e) => { setFullName(formatFullName(e.target.value)) }} />
            </div>
            <div className={style.formInput}>
                <label className={style.label}>WhatsApp</label> 
                <Input className={style.input} 
                    name="phone" 
                    type="text" 
                    placeholder="(99) 99999-9999"
                    value={phoneNumber}
                    onChange={(e) => { setPhoneNumber(formatPhoneNumber(e.target.value)) }} />
            </div>
            <button className={style.submit} type="submit">Peça uma reunião</button>
        </ Form>
    );
}
