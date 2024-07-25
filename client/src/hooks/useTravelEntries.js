import { useEffect, useState } from "react";
import * as travelEntriesAPI from "../api/travelEntriesAPI";

export function useGetAllEntries() {
    const [travelEntries, setTravelEntries] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await travelEntriesAPI.getAll();

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