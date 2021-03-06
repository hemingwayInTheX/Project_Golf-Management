const { OK, CREATED, BAD_REQUEST } = require('../../config/statusCode').statusCode;
const userApp = require('../../application/learner');

//회원(일반 사용자) --> 등록된 전체 강사 이름 조회 API
exports.getList = async (req, res, next) => {
    try{
        const lecturerList = await userApp.getLecturerList();
        res.status(OK).json({
            list: lecturerList,
            message: "전체 강사 정보 조회 성공!"
        });
    } catch(error){
        res.status(BAD_REQUEST).json({
            message: "전체 강사 정보 조회 실패!"
        });
    }
};

//회원(일반 사용자) --> 특정 강사 등록 신청 API
exports.setEnrollment = async (req, res, next) => {
    try{
        const attendee = req.user.learner_no;
        const { username } = req.body;
        const isSelected = await userApp.setEnrollment({ attendee, username });
        res.status(CREATED).json({
            isSelected,
            message: '등록 요청 전송 성공!'
        });
    } catch (error){
        res.status(BAD_REQUEST).json({
            message: '등록 요청 전송 실패!'
        });
    }
};

//회원(일반 사용자) --> 강사 신청에 따른 status 조회 api
exports.getStatus = async (req, res, next) => {
    try{
        const attendee = req.user.learner_no;
        const status = await userApp.getEnrollStatus({attendee});
        res.status(OK).json({
            status,
            message: '상태 전송 성공!'
        })
    } catch (error){
        res.status(BAD_REQUEST).json({
            message: '상태 조회 실패!'
        });
    }
};

// 회원(일반 사용자) --> 나의 강사 목록 조회
exports.getMylecturer = async (req, res, next) => {
    try{
        const attendee = req.user.learner_no;
        const myLecturer = await userApp.getMylecturer({ attendee });
        const data = myLecturer.username;
        console.log(data);
        res.status(OK).json({
            myLecturer,
            message: '나의 강사 목록  조회 성공!'
        })
    } catch (error){
        res.status(BAD_REQUEST).json({
            message: '나의 강사 목록  조회 실패!'
        });
    }
};

// 회원(일반 사용자) --> 강의 정보 조회
exports.getClassInfo = async (req, res, next) => {
    try{
        const { username, instructor } = req.params
        const info = await userApp.getClassInfo({ username, instructor });
        res.status(OK).json({
            info,
            message: '강의 정보 조회 성공!'
        })
    } catch (error){
        res.status(BAD_REQUEST).json({
            message: '강의 정보 조회 실패!'
        });
    }
};
