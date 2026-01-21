import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Chrome } from 'lucide-react';

const Auth = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
            <div className="w-full max-w-md">
                <div className="text-center mb-12">
                    <Link to="/" className="inline-flex items-center gap-2 mb-8">
                        <div className="w-10 h-10 bg-accent-yellow rounded-xl flex items-center justify-center font-bold text-background text-2xl">H</div>
                        <span className="text-2xl font-bold tracking-tight text-white">HOLO</span>
                    </Link>
                    <h1 className="text-3xl font-black mb-2">Welcome Back</h1>
                    <p className="text-zinc-500">Log in to your developer console</p>
                </div>

                <div className="space-y-4 mb-8">
                    <button className="w-full py-4 px-6 rounded-2xl bg-white/5 border border-white/10 font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                        <Github size={20} />
                        Continue with Github
                    </button>
                    <button className="w-full py-4 px-6 rounded-2xl bg-white/5 border border-white/10 font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                        <Chrome size={20} />
                        Continue with Google
                    </button>
                </div>

                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-4 text-zinc-500 font-bold tracking-widest">Or continue with email</span>
                    </div>
                </div>

                <form className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full py-4 px-6 rounded-2xl bg-white/5 border border-white/10 focus:border-accent-yellow/50 outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full py-4 px-6 rounded-2xl bg-white/5 border border-white/10 focus:border-accent-yellow/50 outline-none transition-colors"
                        />
                    </div>
                    <button className="w-full py-4 px-6 rounded-2xl bg-accent-yellow text-background font-black hover:scale-[1.02] transition-transform active:scale-95 shadow-[0_0_30px_-5px_rgba(255,215,0,0.3)]">
                        Sign In
                    </button>
                </form>

                <p className="text-center mt-8 text-sm text-zinc-500">
                    Don't have an account? <a href="#" className="text-accent-yellow font-bold hover:underline">Create one</a>
                </p>
            </div>
        </div>
    );
};

export default Auth;
