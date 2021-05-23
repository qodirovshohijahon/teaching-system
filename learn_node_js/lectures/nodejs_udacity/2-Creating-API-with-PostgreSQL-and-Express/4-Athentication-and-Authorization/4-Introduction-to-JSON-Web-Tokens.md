JSON Web Tokens (JWTs)
In the next three sections you'll be introduced to JSON web tokens by Udacity instructor Gabriel Ruttner. JWTs are the most common means for authenticating users in decoupled (meaning you have a separate front and back end) web applications. They are secure digital tokens that can be passed between your front end and back end applications to authenticate users and even store important user information. We will be integrating a JWT authentication flow into this API, so get comfy and enjoy the next set of videos by Gabriel!

See
nd004-c03-l02-a07-json-web-tokens-1_720p


JWT - Data Structure
Parts of a JSON Web Token

See
nd004-c03-l02-a07-json-web-tokens-1_720p
Including Data in Our JWT Payload


See
nd004-c03-l02-a08.1a-parts-of-jwt_720p

JWT - Validation

Validating JWT Authenticity

See nd004-c03-l02-a08.2-parts-of-jwt-1_720p

If the signature strings match, we can trust that the data within the JWT is authentic.

QUIZ QUESTION
True or False: The signature is used to help encrypt a JWT so it cannot be read without a key



Additional Resources:
[JWT.io](https://jwt.io/introduction/) a useful guide and list of popular JSON Web Token implementations.
[Base64 Encoding](https://en.wikipedia.org/wiki/Base64)
[HMAC](https://en.wikipedia.org/wiki/HMAC) keyed-hash message authentication code
;