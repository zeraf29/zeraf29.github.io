---
# optional alternate title to replace page.title at the top of the page
alt_title: "[Linux]What is different between su and sudo"

# optional sub-title below the page title
sub_title: "[Linux] Switches you completely to another user account or Elevates privileges for a specific command only."

categories:
  - Linux
tags:
  - Linux
  - account
  - secure
last_modified_at: 2024-02-10T16:40:52-05:00

# optional intro text below titles, Markdown allowed
introduction: |
  Su is switches you completely to another user account. Sudo is elevates privileges for a specific command only.

image:  "/assets/images/top_banner.jpg" # URL to a hero image associated with the post (e.g., /assets/page-pic.jpg)

# post specific author data if different from what is set in _config.yml 
author:
  name: Jinhyup Kim 

comments: true  # disable comments on this post
---

1. Functionality 
  - /usr/sh/su:
    - Switches you completely to another user account.
    - You inherit the new user's environment, including their shell (sh in this case) and permissions.
    - Requires the password of the target user.
  - sudo:
    - Elevates privileges for a specific command only.
    - Executes the command in your current shell environment with root permissions.
    - Requires your own password (unless configured differently).
2. Security:
   - /usr/sh/su:
     - Highly insecure: Grants full access to the target user's account, including files, programs, and configurations.
     - Can be easily misused for malicious purposes if the password is compromised.
     - Not recommended for everyday tasks.
   - sudo:
     - More secure: Limits privilege escalation to the specific command you execute.
     - Reduces the potential damage if misused.
     - Provides finer-grained control through configuration files like /etc/sudoers.
     - Preferred for granting temporary administrative privileges.