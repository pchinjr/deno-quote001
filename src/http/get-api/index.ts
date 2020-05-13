// learn more about HTTP functions here: https://arc.codes/primitives/http
import { quote } from "https://gist.githubusercontent.com/pchinjr/75027d05c5844d2f2364e1acbb2c8c37/raw/2ff84587ba01d6d262125fe8c22c27d4b704a837/quote-zotic.js"

export async function handler (req: object) {
  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: JSON.stringify( {data: quote() } )
  }
}