"use client";
import React, { useState } from "react";
import BgCircle from "@/components/BgCircle";
import BgSquare from "@/components/BgSquare";
import { databases, ID, appwriteConfig } from "@/lib/appwrite";

const SignUpPage: React.FC = () => {
    const [role, setRole] = useState<"Engineer" | "Team Lead" | "Manager">("Engineer");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const generateAccessKey = (length = 8) => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let key = "";
        for (let i = 0; i < length; i++) {
            key += chars[Math.floor(Math.random() * chars.length)];
        }
        return key;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const accessKey = generateAccessKey();

        try {
            const user = await databases.createDocument(
                appwriteConfig.databaseId,           // Database ID
                appwriteConfig.authCollectionId,    // Collection ID
                ID.unique(),                         // Document ID فريد
                {
                    name,
                    email,
                    role,
                    accessKey,
                    password,         // ممكن تحطها مشفرة لاحقًا لو حابب
                    loginTime: null,
                    logoutTime: null
                }
            );
            alert(`User registered! Access Key: ${accessKey}`);
            console.log("User saved:", user);
        } catch (err) {
            console.error(err);
            alert("Error registering user, check console");
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center px-4 bg-[#131022]">
            <div className="relative w-full max-w-md sm:max-w-lg">
                <BgCircle className="hidden sm:block" />
                <BgSquare className="hidden sm:block" />
                <div className="relative z-10 bg-[#1E1B2E] border border-[#3A3750] rounded-2xl w-full p-6 sm:p-8 shadow-lg">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-extrabold text-white">Register</h2>
                        <p className="text-gray-400 text-sm mt-1">Create your account</p>
                    </div>

                    <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
                        <div className="text-gray-300 text-sm">
                            Role:
                            <div className="flex gap-4 mt-1">
                                {["Engineer", "Team Lead", "Manager"].map((r) => (
                                    <label key={r} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="role"
                                            value={r}
                                            checked={role === r}
                                            onChange={() => setRole(r as "Engineer" | "Team Lead" | "Manager")}
                                            className="accent-purple-600"
                                        />
                                        {r}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 w-full px-4 py-2 rounded-lg bg-[#2A2738] border border-[#3A3750] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 w-full px-4 py-2 rounded-lg bg-[#2A2738] border border-[#3A3750] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full px-4 py-2 rounded-lg bg-[#2A2738] border border-[#3A3750] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="mt-1 w-full px-4 py-2 rounded-lg bg-[#2A2738] border border-[#3A3750] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            required
                        />

                        <button
                            type="submit"
                            className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-500 transition-colors duration-300 text-sm font-medium"
                        >
                            Register
                        </button>
                    </form>

                    <p className="text-gray-400 text-center text-xs mt-4 hover:text-white transition cursor-pointer">
                        Already have an account? Log in
                    </p>
                </div>
            </div>
        </main>
    );
};

export default SignUpPage;
