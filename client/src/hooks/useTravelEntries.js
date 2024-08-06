import { useEffect, useState } from "react";

import * as travelEntriesAPI from "../api/travelEntriesAPI";

export function useGetAllEntriesWithOwner() {
    const [travelEntries, setTravelEntries] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await travelEntriesAPI.getAllWithOwner();

            setTravelEntries(result);
        })();
    }, []);

    return travelEntries;
}

export function useGetOneEntry(travelEntryId) {
    const [travelEntry, setTravelEntry] = useState({});

    useEffect(() => {
        (async () => {
            const result = await travelEntriesAPI.getOne(travelEntryId);

            setTravelEntry(result);
        })();
    }, [travelEntryId]);

    return travelEntry;
}

export function useGetLatestEntries() {
    const [travelEntries, setTravelEntries] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await travelEntriesAPI.getLatest();

            setTravelEntries(result);
        })();
    }, []);

    return travelEntries;
}

export function useCreateEntry() {
    const entryCreateHandler = (travelEntryData) => travelEntriesAPI.create(travelEntryData);

    return entryCreateHandler
}

export function useEditEntry() {
    const entryEditHandler = (travelEntryId, travelEntryData) => travelEntriesAPI.update(travelEntryId, travelEntryData);

    return entryEditHandler
}