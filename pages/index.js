import React, { useRef } from 'react'

import Head from 'next/head'

import MyFreelaNav from '../components/my-freela-nav'
import MyFreelaForm from '../components/my-freela-form'

import verifyForm from '../lib/validation';

import style from '../styles/Home.module.css'

export default function Home() {
    const formRef = useRef(null);

    return(
      <><Head>
            <title>MeuFreela - Encontre um freelancer</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" /> 
            <meta name="description" content="MeuFreela - Encontre um freelancer" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <MyFreelaNav />
        <main>
            <section className={style.sec1}>
                <h2 className={style.sec1Title1}>Desenvolvedores prontos para ação</h2>
                <h1 className={style.sec1Title2}>Seu projeto pronto na velocidade da luz</h1>
                <button className={style.sec1Button}>Peça uma reunião</button>
            </section>
            <section className={style.sec2}>
                <div className={style.sec2FullDesc}>
                    <h4 className={style.sec2Title}>Nossa iniciativa</h4>
                    <p className={style.sec2Desc}>Somos desenvolvedores que se dedicam a fazer projetos perfeitos e entregar valor para todos os seus clientes. Gostamos de ver clientes satisfeitos com projetos feitos com carinho, atenção e qualidade altíssima.</p>
                </div>
                <img className={style.sec2Image} src="thinking-man.svg"/>
            </section>
            <div className={style.sec2ImageFooter}> </div>
            <section className={style.sec3}>
                <h3 className={style.sec3Title}>Mande um oi, ligamos para você!</h3>
                <p className={style.sec3Desc}>Preencha seus dados para que possamos entrar em contato</p>
                <MyFreelaForm formRef={formRef} submitForm={(data)=>{verifyForm(formRef, data);}}/> 
            </section>
        </main>
        <footer className={style.footer}>
            <p className={style.challenge}>Desafio 1 - Frontend iniciante</p>
            <p className={style.challenge}>Iniciativa <strong>DEV HALL</strong></p>
        </footer> </>
    );
}
