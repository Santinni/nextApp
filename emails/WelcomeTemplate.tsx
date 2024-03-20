import React from "react"

import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components"

const WelcomeTemplate = ({name}: {name:string}) => {
  return (
    <Html>
        <Preview>
            Welcome to our platform!
        </Preview>
        <Tailwind>
        <Body className="bg-white">
            <Container>
                <Text className="font-bold text-3xl">
                    Hello, {name}. Welcome to our platform!
                </Text>
                <Link href="https://www.google.com">Click here to activate your account</Link>
            </Container>
        </Body>
        </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate