import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Table from 'react-bootstrap/Table';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal SGATI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          
          <p>
          Portal da Operação e Suporte            
          </p>
          
          <div>

              {"  "}
              <Image
                src="/logomeio.png"
                alt="SGATI Logo"
                className={styles.vercelLogo}
                width={100}
                height={50}
                priority
              />
           
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/LOGO_CASSI_EMPRESARIAL_PNG.png"
            alt="Cassi Logo"
            width={360}
            height={180}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="/server01"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
            SQLHMLBD200 <span>-&gt;</span>
            </h2>

              <Table>
                  <thead>
                    <tr >
                      <th style={{textAlign: 'left'}}>#</th>
                      <th>Parâmetros:</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Status:</td>
                      <td style={{textAlign: 'right'}}>OK</td>
                    </tr>
                    <tr>
                      <td>Sensores:</td>
                      <td style={{textAlign: 'right'}}>12 de 12</td>
                    </tr>
                    <tr>
                      <td>Endereço IP:</td>
                      <td style={{textAlign: 'right'}}>172.16.70.200</td>
                    </tr>
                    <tr>
                      <td>Dependência:</td>
                      <td style={{textAlign: 'right'}}>Ping</td>
                    </tr>
                    <tr>
                      <td>Intervalo padrão:</td>
                      <td style={{textAlign: 'right'}}>60 segundos</td>
                    </tr>
                    <tr>
                      <td>ID:</td>
                      <td style={{textAlign: 'right'}}>#2051</td>
                    </tr>

                  </tbody>
              </Table>  
              
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Servidor 02 <span>-&gt;</span>
            </h2>
            <p>
            testo bunito para ingleis vê
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Servidor 03 <span>-&gt;</span>
            </h2>
            <p>
            testo bunito para ingleis vê
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Servidor 04 <span>-&gt;</span>
            </h2>
            <p>
            testo bunito para ingleis vê
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
