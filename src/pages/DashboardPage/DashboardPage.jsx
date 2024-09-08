import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useMedia } from "../../hooks/useMedia";
import Loader from "../../components/Loader/Loader";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import ModalLogOut from "../../components/ModalLogOut/ModalLogOut";
import ModalEditTransaction from "../../components/ModalEditTransaction/ModalEditTransaction";
import ModalAddTransaction from "../../components/ModalAddTransaction/ModalAddTransaction";
import s from "./DashboardPage.module.css";
import Balance from "../../components/Balance/Balance";
import Currency from "../../components/Currency/Currency";

const DashboardPage = () => {
  const { isMobile } = useMedia();

  return (
    <div className={s.container}>
      <Header />
      <main className={s.main}>
        <div className={s.navItem}>
          <div className={s.wrapper}>
            <Navigation />
            <Balance />
          </div>
          {!isMobile && <Currency />}
        </div>
        <div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <ModalLogOut />
      <ModalEditTransaction />
      <ModalAddTransaction />
    </div>
  );
};

export default DashboardPage;
