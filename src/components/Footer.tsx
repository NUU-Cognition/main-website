import {Twitter, Mail} from 'lucide-react';
import Link from 'next/link';

type SocialLink = {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    href: string;
    label: string;
};

const socialLinks: SocialLink[] = [
    {
        icon: Twitter,
        href: 'https://twitter.com/nuu_cognition',
        label: 'Follow us on X (Twitter)'
    },
    {
        icon: Mail,
        href: 'mailto:nuucognition@gmail.com',
        label: 'Email us'
    }
];

export function Footer() {
    return (
        <footer className="border-t">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center">
                    <p className="text-gray-600">
                        © {new Date().getFullYear()} nuu cognition. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-black transition-colors"
                                aria-label={link.label}
                            >
                                <link.icon size={20}/>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}