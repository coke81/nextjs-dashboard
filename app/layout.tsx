import { monserrat_font} from "./ui/font";
import "./ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${monserrat_font.className} antialised`}>
      <body>
        {children}
        <footer className="text-center">
          @2023 Acme, Inc. Todos los Derechos Reservados.
        </footer>
      </body>
    </html>
  );
}
