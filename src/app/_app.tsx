'use client'
import React from 'react';
import { NextUIProvider } from '@nextui-org/react'

function MyApp({ Component, pageProps }: any) {
    return (
        <NextUIProvider>
            <Component {...pageProps} />
        </NextUIProvider>
    )
}

export default MyApp
