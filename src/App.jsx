import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import { Welcome } from './pages/Welcome'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Dashboard } from "./pages/Dashboard";
import { SelectAccount } from "./pages/SelectAccount";
import { OpenAccount } from "./pages/OpenAccount";
import { PageNotFound } from "./pages/PageNotFound";
import { Layout } from './components/Layout'
import { TransactionSuccess } from "./pages/TransactionSuccess";
import { Deposit } from "./pages/Deposit";
import { Withdraw } from './pages/Withdraw'
import { ImpsTransfer } from "./pages/ImpsTransfer";
import { UpiTransfer } from "./pages/UpiTransfer";
import { Statement } from "./pages/Statement";
import { AccountProtectedRoute } from "./components/AccountProtectedRoute";
import { Profile } from "./pages/profile";
import { Transactions } from "./pages/Transactions";
import { Email } from "./pages/Email";
import AdminPanel from "./pages/AdminPanel";

function App() {


  return (

    <BrowserRouter>

      <Routes>


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/admin-panel" element={<AdminPanel />} />


        <Route element={<Layout />}>
          <Route path="/email" element={<Email />} />
          <Route path="/profile" element={<AccountProtectedRoute><Profile /></AccountProtectedRoute>} />
          <Route path="/dashboard" element={<AccountProtectedRoute><Dashboard /></AccountProtectedRoute>} />
          <Route path="/select-account" element={<SelectAccount />} />
          <Route path="/open-account" element={<OpenAccount />} />
          <Route path="/deposit" element={<AccountProtectedRoute><Deposit /></AccountProtectedRoute>} />
          <Route path="/withdraw" element={<AccountProtectedRoute><Withdraw /></AccountProtectedRoute>} />
          <Route path="/imps-transfer" element={<AccountProtectedRoute><ImpsTransfer /></AccountProtectedRoute>} />
          <Route path="/upi-transfer" element={<AccountProtectedRoute><UpiTransfer /></AccountProtectedRoute>} />
          <Route path="/statement" element={<AccountProtectedRoute><Statement /></AccountProtectedRoute>} />
          <Route path="/transactions" element={<AccountProtectedRoute><Transactions /></AccountProtectedRoute>} />
          <Route path="/transaction-success" element={<AccountProtectedRoute><TransactionSuccess /></AccountProtectedRoute>} />
        </Route>


        <Route path="*" element={<PageNotFound />} />

      </Routes>

    </BrowserRouter>


  )
}

export default App
