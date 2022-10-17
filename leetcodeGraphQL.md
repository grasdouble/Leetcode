# Leetcode GraphQL

Common URL: URL: https://leetcode.com/graphql/

### Get problem description:

Body: {"query":"\n query questionContent($titleSlug: String!) {\n question(titleSlug: $titleSlug) {\n content\n mysqlSchemas\n }\n}\n ","variables":{"titleSlug":"sqrtx"}}

### Get list of submission

Body: {"query":"\n query submissionList($offset: Int!, $limit: Int!, $lastKey: String, $questionSlug: String!, $lang: Int, $status: Int) {\n questionSubmissionList(\n offset: $offset\n limit: $limit\n lastKey: $lastKey\n questionSlug: $questionSlug\n lang: $lang\n status: $status\n ) {\n lastKey\n hasNext\n submissions {\n id\n title\n titleSlug\n status\n statusDisplay\n lang\n langName\n runtime\n timestamp\n url\n isPending\n memory\n hasNotes\n }\n }\n}\n ","variables":{"questionSlug":"sqrtx","offset":0,"limit":20,"lastKey":null}}

### Get submission content with stats

Body: {"query":"\n query submissionDetails($submissionId: Int!) {\n submissionDetails(submissionId: $submissionId) {\n runtime\n runtimeDisplay\n runtimePercentile\n runtimeDistribution\n memory\n memoryDisplay\n memoryPercentile\n memoryDistribution\n code\n timestamp\n statusCode\n user {\n username\n profile {\n realName\n userAvatar\n }\n }\n lang {\n name\n verboseName\n }\n question {\n questionId\n }\n notes\n topicTags {\n tagId\n slug\n name\n }\n runtimeError\n compileError\n lastTestcase\n }\n}\n ","variables":{"submissionId":824681442}}

### Get submission content alone

Body: {"query":"\n query syncedCode($questionId: Int!, $lang: Int!) {\n syncedCode(questionId: $questionId, lang: $lang) {\n timestamp\n code\n }\n}\n ","variables":{"lang":6,"questionId":69}}

### Get status for a problem (accepted or not)

Body:{"query":"\n query userQuestionStatus($titleSlug: String!) {\n question(titleSlug: $titleSlug) {\n status\n }\n}\n ","variables":{"titleSlug":"sqrtx"}}

### Get list of tags

Body: {"query":"\n query submissionTopicTags {\n questionTopicTags {\n edges {\n node {\n tagId\n name\n translatedName\n }\n }\n }\n}\n ","variables":{}}

### Get active Daily Coding Challenge Question

Body: {"query":"\n query questionOfToday {\n activeDailyCodingChallengeQuestion {\n date\n userStatus\n link\n question {\n acRate\n difficulty\n freqBar\n frontendQuestionId: questionFrontendId\n isFavor\n paidOnly: isPaidOnly\n status\n title\n titleSlug\n hasVideoSolution\n hasSolution\n topicTags {\n name\n id\n slug\n }\n }\n }\n}\n ","variables":{}}

### Get list of status and submittable language list

Body: {"query":"\n query submissionFilterTypes {\n submittableLanguageList {\n id\n verboseName\n }\n statusList {\n id\n name\n }\n}\n ","variables":{}}
