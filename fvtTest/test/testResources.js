
const TEST_JOB_PREFIX = 'TESTJOB';

const SHORT_JOB = `//${TEST_JOB_PREFIX}S JOB (),MSGCLASS=H\n//STEP1 EXEC PGM=BPXBATCH,PARM='sh sleep 10' `;

const LONG_JOB = `//${TEST_JOB_PREFIX}L JOB (),MSGCLASS=H\n//STEP1 EXEC PGM=BPXBATCH,PARM='sh sleep 300' `;

const JCL_ERROR_JOB = `//${TEST_JOB_PREFIX}E JOB (),MSGCLASS=H\n//STE1 EXEC PGM=BPXBATCH,PARM='sh sleep 300' `;

module.exports = {
    TEST_JOB_PREFIX,
    SHORT_JOB,
    LONG_JOB,
    JCL_ERROR_JOB,
};