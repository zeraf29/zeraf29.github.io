---
# optional alternate title to replace page.title at the top of the page
alt_title: "[Cassandra] In progress… Setting Cassandra Clustering"

# optional sub-title below the page title
sub_title: ""

categories:
   - cassandra
tags:
   - Cassandra
   - Clustering
   - Cluster
last_modified_at: 2024-03-22T11:20:52-05:00


# optional intro text below titles, Markdown allowed
introduction: Cassandra clustering setting options

image:  "/assets/images/top_banner.jpg" # URL to a hero image associated with the post (e.g., /assets/page-pic.jpg)
# post specific author data if different from what is set in _config.yml 
author:
  name: Jinhyup Kim 

comments: true  # disable comments on this post
---



1. Issue
  - 플젝으로 시간 없어서 글을 제대로 못 쓰고 있음
  - 까먹지 않게 흔적이라도 미리 남겨둠. 나중에 다시 정리

```
리눅스 서버 3대에 Cassandra 클러스터링 구성 시 설정 파일 세팅 방법

1. 기본 설정:

각 서버에서 동일한 Cassandra 버전을 설치합니다.
각 서버에 동일한 cassandra.yaml 설정 파일을 사용합니다.
각 서버에 동일한 데이터 디렉토리를 사용합니다.
2. cassandra.yaml 설정:

cluster_name: 클러스터 이름을 설정합니다. 모든 Cassandra 노드는 동일한 클러스터 이름을 사용해야 합니다.
listen_address: Cassandra 서버가 클라이언트 연결을 수신할 IP 주소를 설정합니다.
rpc_address: Cassandra RPC 서버가 클라이언트 연결을 수신할 IP 주소를 설정합니다.
seed_provider: 클러스터에 참여할 다른 Cassandra 노드를 설정합니다.
3. 시드 노드 설정:

seed_provider 설정은 Cassandra 클러스터에 참여할 다른 Cassandra 노드를 설정합니다.
class_name 항목은 시드 노드를 찾는 방법을 지정합니다.
parameters 항목은 시드 노드 목록을 지정합니다.
예시:

YAML
seed_provider:
    - class_name: org.apache.cassandra.locator.SimpleSeedProvider
      parameters:
          - seeds: “192.168.1.1,192.168.1.2,192.168.1.3”
코드를 사용할 때는 주의가 필요합니다.

위 예시는 다음을 의미합니다.

Cassandra 클러스터는 3개의 노드로 구성됩니다.
각 노드의 IP 주소는 192.168.1.1, 192.168.1.2, 192.168.1.3입니다.
4. 데이터 디렉토리:

Cassandra 데이터 디렉토리는 모든 Cassandra 노드에서 동일해야 합니다.
데이터 디렉토리는 충분한 디스크 공간을 확보해야 합니다.
5. Cassandra 시작:

모든 Cassandra 노드에서 Cassandra 서비스를 시작합니다.
6. 확인:

Cassandra 로그를 확인하여 모든 노드가 클러스터에 참여했는지 확인합니다.
참고:

Cassandra 설정 파일 변경 시 주의해야 합니다. 잘못된 설정은 클러스터 문제를 일으킬 수 있습니다.
설정을 변경하기 전에 항상 백업을 수행해야 합니다.
Cassandra 클러스터링 구성에 대한 자세한 내용은 공식 문서를 참조하십시오.
다음은 Cassandra 클러스터링 구성에 대한 유용한 링크입니다.

Cassandra 공식 문서: https://cassandra.apache.org/doc/stable/
Cassandra 클러스터링 구성: [유효하지 않은 URL 삭제됨]
Cassandra 커뮤니티 포럼: https://cassandra.apache.org/community/
```
