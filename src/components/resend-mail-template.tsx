import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  interface SignInWithLinkProps {
    magicLink?: string;
  }
  
  export const SignInWithLink = ({
    magicLink,
  }: SignInWithLinkProps) => {
    
    return (
    <Html>
      <Head />
      <Preview>Log in with this magic link.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src='/logo.svg'
            width={80}
            height={80}
            alt="Doctors Dashboard"
            // className="py-2"
          />
          <Heading style={heading}>🪄 Your Verification link</Heading>
          <Section style={body}>
            <Text style={paragraph}>
              <Link style={link} href={magicLink}>
                👉 Click here to verify your mail 👈
              </Link>
            </Text>
            <Text style={paragraph}>
              If you did not request this, please ignore this email.
            </Text>
          </Section>
          <Text style={paragraph}>
            Best,
            <br />- Doctors Dashboard
          </Text>
          <Hr style={hr} />
          {/* <Img
            src='/favicon.svg'
            width={32}
            height={32}
            style={{
              WebkitFilter: "grayscale(100%)",
              filter: "grayscale(100%)",
              margin: "20px 0",
            }}
          /> */}
          <Text style={footer}>Doctors Dashboard Inc.</Text>
          {/* <Text style={footer}>
            2093 Philadelphia Pike #3222, Claymont, DE 19703
          </Text> */}
        </Container>
      </Body>
    </Html>
  );
}
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 25px 28px",
    backgroundImage: 'url("/assets/raycast-bg.png")',
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat, no-repeat",
  };
  
  const heading = {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "48px",
  };
  
  const body = {
    margin: "24px 0",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const link = {
    color: "#059669",
  };
  
  const hr = {
    borderColor: "#dddddd",
    marginTop: "48px",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    marginLeft: "4px",
  };
  