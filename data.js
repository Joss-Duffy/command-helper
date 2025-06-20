// data.js

export const queries = {
    "GetActivityDetails": `SELECT s.* FROM trackeractivitydetails s 
WHERE s.activityId = (SELECT a.activityId FROM activity a WHERE a.activityName = ":activityName")
AND s.equipmentListId = (SELECT e.equipmentListId FROM equipmentlist e WHERE e.tagNo = ":tagNo")`,

    "ResetUsers": `UPDATE USER SET PASSWORD = 'naYUldWRed+UHp50vko+spyWEXr3orvU/4eNt+n126hTycWUajG8gdw5TH01la14';

UPDATE USER
SET emailAddress = CONCAT(
    userId,
    REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(
        firstName, ' ', ''), '-', ''), '_', ''), '.', ''), ',', ''), '@', ''), '(', ''), ')', ''),
    REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(
        lastName, ' ', ''), '-', ''), '_', ''), '.', ''), ',', ''), '@', ''), '(', ''), ')', ''),
    '@eidacentral.com'
);

UPDATE personnel SET email = CONCAT(personnel.userId,personnel.personName, "@eidacentral.com");
UPDATE USER SET STATUS = "ACTIVE";
UPDATE USER SET policyVersionNumber = 2;
UPDATE USER SET failedLoginAttempts = 0;
UPDATE USER SET dateLastPwChange = NOW()
UPDATE USERSET emailAddress = REPLACE(emailAddress, ' ', '');`
};

export const descriptions = {
    "GetActivityDetails": "This query retrieves details of a specific activity by joining the tracker activity details with the activity and equipment list tables. It filters based on the activity name and equipment tag number.",
};
