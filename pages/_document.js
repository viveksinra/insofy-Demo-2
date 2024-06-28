import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/assets/images/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <title>Insofy - Insurance & Consulting Business</title>
            </Head>
            <body className='theme-insofy scrollbarcolor'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}






// import { Head, Html, Main, NextScript } from 'next/document'

// export default function Document() {
//     return (
//         <Html lang="en">
//             <Head />
//             <link rel="shortcut icon" href="/assets/images/favicon.ico" />
//             <title>Insofy - Insurance & Consulting Business</title>
//             <link rel="preconnect" href="https://fonts.bunny.net" />
//             <link href="https://fonts.bunny.net/css?family=dm-sans:400,400i,500,500i,700,700i" rel="stylesheet" />
//             <body className='theme-insofy scrollbarcolor'>
//                 <Main />
//                 <NextScript />
//             </body>
//         </Html>
//     )
// }
