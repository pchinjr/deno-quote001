// learn more about HTTP functions here: https://arc.codes/primitives/http
import { quote } from "https://gist.githubusercontent.com/pchinjr/75027d05c5844d2f2364e1acbb2c8c37/raw/9cbcd9e7f28a163b520d6b4d70e1098c00e1a02a/quote-zotic.js"

console.log(quote)
export async function handler (req: object) {
  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: JSON.stringify( {data: quote() } )
  }
}