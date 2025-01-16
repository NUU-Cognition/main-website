import React, {useState} from 'react';
import {Search} from 'lucide-react';

export function SearchBar({onSearch}: { onSearch: (query: string) => void }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <div className="relative mb-8">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
                <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                />
            </div>
        </div>
    );
}