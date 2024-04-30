import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/container";
import Sidebar from "./components/Sidebar/sidebar";
import Bottombar from "./components/BottomBar";
import EmailList from "./components/EmailList";
import EmailContent from "./components/EmailContent";

export default function App() {
  const [openEmail, setOpenEmail] = useState(null);


  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative ">
          <Sidebar />
         <EmailList setOpenEmail={setOpenEmail} />
         {openEmail && <EmailContent email={openEmail} onClose={() => setOpenEmail(null)} setOpenEmail={setOpenEmail} />}
          <Bottombar/>
        </div>
      </Container>
    </>
  );
}
