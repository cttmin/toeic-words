/*
  단어 목록.
  여기에 새 Day 나 단어를 더하면, 앱을 다시 열 때 자동으로 들어갑니다.
  (앱에서 지운 단어는 다시 들어오지 않아요.)

  한 줄 = [단어, 뜻, 예문, 해석, 해석 속 단어 뜻]
*/
const WORDS = [
  { day: "Day 1", items: [
    ["submit", "제출하다", "All applicants must submit their résumés by Friday.", "모든 지원자는 금요일까지 이력서를 제출해야 합니다.", "제출"],
    ["postpone", "연기하다", "The board meeting has been postponed until next Monday.", "이사회 회의가 다음 주 월요일로 연기되었습니다.", "연기"],
    ["review", "검토하다", "Please review the attached contract before the meeting.", "회의 전에 첨부된 계약서를 검토해 주십시오.", "검토"],
    ["confirm", "확인하다", "Could you confirm your reservation by e-mail?", "이메일로 예약을 확인해 주시겠습니까?", "확인"],
    ["attend", "참석하다", "Over 200 people are expected to attend the conference.", "200명이 넘는 사람들이 그 회의에 참석할 것으로 예상됩니다.", "참석"],
    ["approve", "승인하다", "The manager approved the budget for the new project.", "관리자가 새 프로젝트의 예산을 승인했습니다.", "승인"],
    ["extend", "연장하다", "The store will extend its business hours during the holidays.", "그 상점은 연휴 기간 동안 영업시간을 연장할 것입니다.", "연장"],
    ["inquire", "문의하다", "Customers can inquire about the delivery status online.", "고객들은 온라인으로 배송 상태를 문의할 수 있습니다.", "문의"],
    ["renovate", "보수하다", "The lobby is being renovated this month.", "이번 달에 로비가 보수되고 있습니다.", "보수"],
    ["distribute", "배포하다", "The handouts will be distributed at the start of the session.", "유인물은 세션 시작 시에 배포될 것입니다.", "배포"],
  ]},
  { day: "Day 2", items: [
    ["reserve", "예약하다", "I'd like to reserve a table for four at seven o'clock.", "7시에 4명 자리를 예약하고 싶습니다.", "예약"],
    ["recruit", "모집하다", "The company is recruiting experienced sales staff.", "그 회사는 경력 있는 영업 직원을 모집하고 있습니다.", "모집"],
    ["launch", "출시하다", "The firm plans to launch a new product line next spring.", "그 회사는 내년 봄에 새 제품군을 출시할 계획입니다.", "출시"],
    ["assign", "배정하다", "Each new employee will be assigned a mentor.", "각 신입 사원에게 멘토가 배정될 것입니다.", "배정"],
    ["reimburse", "환급하다", "Travel expenses will be reimbursed within two weeks.", "출장 경비는 2주 이내에 환급될 것입니다.", "환급"],
    ["register", "등록하다", "Participants must register for the workshop in advance.", "참가자들은 워크숍에 미리 등록해야 합니다.", "등록"],
    ["relocate", "이전하다", "Our headquarters will relocate to Seoul next year.", "우리 본사는 내년에 서울로 이전할 것입니다.", "이전"],
    ["implement", "시행하다", "The new safety policy will be implemented next month.", "새 안전 정책은 다음 달에 시행될 것입니다.", "시행"],
    ["negotiate", "협상하다", "The two companies are negotiating a merger agreement.", "두 회사는 합병 계약을 협상하고 있습니다.", "협상"],
    ["evaluate", "평가하다", "Supervisors evaluate employee performance twice a year.", "관리자들은 1년에 두 번 직원 성과를 평가합니다.", "평가"],
  ]},
];
