import StyledComponentsRegistry from "./lib/registry";
import { MSWComponent } from "./_component/MSWComponent";
import AuthSession from "./sessionProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body style={{ margin: 0 }}>
        <MSWComponent />
        <StyledComponentsRegistry>
          <AuthSession>{children}</AuthSession>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
