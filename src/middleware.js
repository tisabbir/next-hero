import { NextResponse } from "next/server";


const cookiePookie = "next-hero"

export const middleware = (request) =>  {

    const cookies = request.cookies.get('token')

    if(!cookies || cookiePookie !== cookies.value){

        return NextResponse.redirect(new URL("/login", request.url))
    }
    return NextResponse.redirect(new URL("/contact", request.url))
}

export const config = {
    matcher: ["/about","/blog"]
}