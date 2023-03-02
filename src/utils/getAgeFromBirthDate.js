export function getAgeFromBirthDate(birthDateString) {
    const birthDate = new Date(birthDateString);
    const currentDate = new Date();
    const differenceMillis = currentDate.getTime() - birthDate.getTime();
    const differenceYears = differenceMillis / (1000 * 60 * 60 * 24 * 365.25);
    const age = Math.floor(differenceYears);
    return age;
}
