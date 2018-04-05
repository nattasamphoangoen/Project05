#!/usr/bin/env bats

@test "ทดสอบ" {
	true
}


@test "trackNumber field ต้องไม่ Null" {
	json=$(curl -s -H "Content-Type: application/json" -X POST \
	-d '{"trackNumber": ""}' http://localhost:8080/api/statusNotifications)	
	echo $json | grep "must match"
}
