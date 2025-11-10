import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "react-email";

interface ResendVerificationEmailProps {
  username: string;
  otp: string;
}

export default function ResendVerificationEmail({
  username,
  otp,
}: ResendVerificationEmailProps) {
  return (
    <Html>
      <Head>
        <title>Resend Verification Code</title>
        <Font />
      </Head>
      <Preview>Your verification code has been resent</Preview>
      <Section style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <Heading style={{ color: "#1a73e8", fontSize: "22px" }}>
          Hello {username},
        </Heading>

        <Text style={{ fontSize: "16px", color: "#333" }}>
          You requested a new verification code. Please use the OTP below to
          verify your account:
        </Text>

        <Section
          style={{
            backgroundColor: "#f5f5f5",
            padding: "15px",
            borderRadius: "8px",
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          <Text
            style={{
              fontSize: "28px",
              letterSpacing: "3px",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            {otp}
          </Text>
        </Section>

        <Text style={{ fontSize: "15px", color: "#555" }}>
          This OTP will expire in 10 minutes. Please do not share it with
          anyone.
        </Text>

        <Row style={{ marginTop: "30px" }}>
          <Button
            href="https://yourwebsite.com/verify"
            style={{
              backgroundColor: "#1a73e8",
              color: "#fff",
              padding: "10px 25px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Verify Now
          </Button>
        </Row>

        <Text
          style={{
            fontSize: "13px",
            color: "#999",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          If you didn’t request this, you can safely ignore this email.
        </Text>
      </Section>
    </Html>
  );
}
