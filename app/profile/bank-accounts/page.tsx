"use client"

import { useState } from "react"
import { ChevronLeft, Plus, BanknoteIcon as Bank, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Navbar from "@/components/navbar"

interface BankAccount {
    id: string
    name: string
    accountNumber: string
    bank: string
}

export default function BankAccountsPage() {
    const [accounts, setAccounts] = useState<BankAccount[]>([
        {
            id: "1",
            name: "Lucy Gina",
            accountNumber: "1234567890",
            bank: "Wemabank GTB",
        },
    ])
    const [showAddAccount, setShowAddAccount] = useState(false)

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-1 max-w-[1440px] mx-auto w-full p-4 md:p-6">
                <div className="max-w-[500px] mx-auto">
                    {!showAddAccount ? (
                        <>
                            <div className="mb-6">
                                <Link href="/profile" className="inline-flex items-center text-gray-600">
                                    <ChevronLeft className="h-5 w-5 mr-1" />
                                    <span>Bank Accounts</span>
                                </Link>
                            </div>

                            <div className="bg-white rounded-lg border p-4">
                                <h2 className="text-sm text-gray-500 mb-4">Available accounts</h2>

                                <div className="space-y-3">
                                    {accounts.map((account) => (
                                        <div key={account.id} className="flex items-center justify-between p-2 border rounded-md">
                                            <div className="flex items-center">
                                                <div className="h-8 w-8 bg-gray-100 rounded-md flex items-center justify-center mr-3">
                                                    <Bank className="h-4 w-4 text-gray-600" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">{account.name}</div>
                                                    <div className="text-xs text-gray-500">
                                                        {account.accountNumber} • {account.bank}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h-5 w-5 rounded-full border border-[#00A67E] flex items-center justify-center">
                                                <div className="h-3 w-3 rounded-full bg-[#00A67E]"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    variant="outline"
                                    className="w-full mt-4 flex items-center justify-center"
                                    onClick={() => setShowAddAccount(true)}
                                >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add New Account
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex justify-between items-center mb-6">
                                <Link href="/profile/bank-accounts" className="inline-flex items-center text-gray-600">
                                    <ChevronLeft className="h-5 w-5 mr-1" />
                                    <span>Bank Accounts</span>
                                </Link>
                                <Button className="bg-[#00A67E] hover:bg-[#008F6B]" onClick={() => setShowAddAccount(false)}>
                                    Save
                                </Button>
                            </div>

                            <div className="bg-white rounded-lg border p-4">
                                <div className="space-y-4">
                                    <div>
                                        <div className="relative">
                                            <Button variant="outline" className="w-full justify-between">
                                                <span className="text-gray-500">Select Bank</span>
                                                <ChevronDown className="h-4 w-4 ml-2" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                                        <input type="text" className="w-full p-2 border rounded-md" placeholder="2001234567" />
                                    </div>

                                    <div>
                                        <input type="text" className="w-full p-2 border rounded-md" value="Lucy Gina" readOnly />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

