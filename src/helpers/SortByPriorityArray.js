export const SortByPriorityArray = (entries, priority) => {
    return entries.sort((entryA, entryB) => {
        // If either rank is not in the priority list a proper order can't be determined
        if (priority.indexOf(entryA) === -1 || priority.indexOf(entryB) === -1) {
            return 0;
        }

        // If entryA has a higher index than entryB in the priority array we want to return 1 to place it higher
        return priority.indexOf(entryA) > priority.indexOf(entryB) ? 1 : -1;
    });
}