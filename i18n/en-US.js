/*
* @file       scripts/i18n/en-US.js
* @description Internationalization language pack: English (US), 1.3.1 version adds source repository support
* @version     1.3.1
*/
const I18N_EN_US = {
// ===================================================================
//  导航栏 — Navigation
// ===================================================================
'app_name':                      'Piggy Bank',                             // 应用名称
'nav_jars':                      'Piggy Banks',                            // 存钱罐
'nav_profile':                   'My Account',                             // 我的
'nav_settings':                  'Settings',                               // 设置
'nav_bills':                     'Bills',                                  // 账单
// ===================================================================
//  页面标题 — Page Titles
// ===================================================================
'page_title_settings':           'Settings',                               // 设置
'page_title_bills':              'Bills',                                  // 账单
'page_title_about':              'About',                                  // 关于
// ===================================================================
//  我的页面 — Profile
// ===================================================================
'profile_total_amount':          'Total Savings',                          // 总资产
// ===================================================================
//  设置 — 外观 — Settings > Appearance
// ===================================================================
'settings_section_appearance':   'Appearance & Display',                   // 外观与显示
'settings_theme_mode':           'Light / Dark Mode',                      // 浅色 / 深色模式
'settings_language':             'Language',                               // 语言
// ===================================================================
//  设置 — 交互 — Settings > Interaction
// ===================================================================
'settings_section_interaction':  'Interaction & Gestures',                 // 交互与手势
'settings_swipe':                'Card Swipe Settings',                    // 卡片滑动设置
// ===================================================================
//  设置 — 数据 — Settings > Data
// ===================================================================
'settings_section_data':         'Data Management',                        // 数据管理
'settings_backup':               'Backup Data',                            // 备份数据
'settings_clear_data':           'Clear Data',                             // 清除数据
'settings_reset':                'Restore Default Settings',               // 恢复默认设置
// ===================================================================
//  设置 — 关于 — Settings > About
// ===================================================================
'settings_section_about':        'About',                                  // 关于
'settings_about':                'About',                                  // 关于
// ===================================================================
//  设置 — 键盘避让 — Keyboard Avoidance
// ===================================================================
'settings_input_avoidance':      'Keyboard Avoidance',                     // 键盘避让
'status_enabled':                'Enabled',                                // 已开启
'status_disabled':               'Disabled',                               // 已关闭
// ===================================================================
//  日期格式模板 — Date Format Template
// ===================================================================
'date_format_full':              '{m}/{d}/{y}',                            // 美式日期格式：月/日/年
// ===================================================================
//  主题选择弹窗 — Theme Selection
// ===================================================================
'dialog_select_theme':           'Select Theme Mode',                      // 选择主题模式
'theme_light':                   'Light Mode',                             // 浅色模式
'theme_dark':                    'Dark Mode',                              // 深色模式
'theme_auto':                    'Follow System',                          // 跟随系统
'msg_theme_switched':            'Switched to {mode}',                     // 已切换至{mode}
// ===================================================================
//  语言选择 — Language Selection
// ===================================================================
'lang_select_title':             'Select Language',                        // 选择语言
'lang_select_desc':              'Choose your preferred language. More languages will be supported over time.',
'lang_opt_zh_title':             '中文',                                   // 中文显示名
'lang_opt_zh_desc':              'Simplified Chinese',                     // 简体中文
'lang_opt_en_title':             'English',                                // 英语显示名
'lang_opt_en_desc':              'English',                                // 英语
'lang_confirm_title':            'Confirm Language',                       // 确认语言
'lang_confirm_msg':              'Switch the app language to {lang}? You can change it anytime in Settings.',
'lang_btn_cancel':               'Cancel',                                 // 取消
'lang_btn_confirm':              'Confirm',                                // 确认
'lang_switch_success':           'Language changed to {lang}',            // 语言已切换为 {lang}
'lang_select_hint':              'Please select a language first',        // 请先选择一种语言
// ===================================================================
//  首次启动引导 — Onboarding
// ===================================================================
'onboarding_title':              'Welcome to Piggy Bank',                  // 欢迎使用存钱罐
'onboarding_desc':               'Choose your preferred language so we can give you the best experience.',
'onboarding_step2_title':        'Confirm Language',                       // 确认语言
'onboarding_step2_desc':         'You selected {lang}. The app will use this language globally. You can change it anytime in Settings.',
'onboarding_btn_next':           'Next',                                   // 下一步
'onboarding_btn_back':           'Back',                                   // 上一步
'onboarding_btn_finish':         'Get Started',                            // 开始使用
'onboarding_hint_more':          'More languages coming soon',             // 更多语言即将上线
// ===================================================================
//  创建 / 编辑弹窗 — Create / Edit Dialogs
// ===================================================================
'dialog_create_jar':             'Create a Piggy Bank',                    // 创建存钱罐
'label_jar_name':                'Name (1–25 characters)',                 // 名称（1–25个字符）
'type_cumulative':               'Cumulative',                             // 累积型
'type_target':                   'Target',                                 // 目标型
'label_target_amount':           'Target Amount',                          // 目标金额
'label_note':                    'Note (optional, up to 100 characters)',  // 备注（选填，最多100字）
'dialog_edit_note':              'Edit Note',                              // 编辑备注
'label_note_content':            'Note Content',                           // 备注内容
'dialog_rename':                 'Rename Piggy Bank',                      // 重命名存钱罐
'label_new_name':                'New Name (1–25 characters)',             // 新名称（1–25个字符）
// ===================================================================
//  关于页面 — About Page
// ===================================================================
'about_version':                 'Version',                                // 版本
'about_developer':               'Developer',                              // 开发者
'about_dev_name':                'Baiyun Studio',                          // 白云工作室
'about_source_code':             'Source Repository',                      // 【1.3.1 新增】发行仓库
// ===================================================================
//  操作按钮 — Action Buttons
// ===================================================================
'action_deposit':                'Deposit',                                // 存入
'action_withdraw':               'Withdraw',                               // 取出
'action_bill':                   'Bills',                                  // 账单
'action_rename':                 'Rename',                                 // 重命名
'action_edit_note':              'Edit Note',                              // 编辑备注
'action_edit_target':            'Edit Target',                            // 修改目标
'action_delete':                 'Delete',                                 // 删除
'action_more':                   'More Actions',                           // 更多操作
'action_clear_balance':          'Clear Balance',                          // 清空余额
// ===================================================================
//  标签与徽章 — Labels & Badges
// ===================================================================
'badge_default':                 'Default',                                // 默认
'label_created_at':              'Created',                                // 创建于
'label_target':                  'Target',                                 // 目标
'progress_lack':                 'To Go',                                  // 还差
'progress_exceed':               'Exceeded',                               // 已超额
// ===================================================================
//  数字键盘标签 — Number Pad Labels
// ===================================================================
'np_label_input':                'Enter Amount',                           // 输入金额
'np_label_deposit':              'Deposit Amount',                         // 存入金额
'np_label_withdraw':             'Withdraw Amount',                        // 取出金额
'np_label_set_target':           'Set Target',                             // 设定目标
'np_label_edit_target':          'Edit Target',                            // 修改目标
// ===================================================================
//  确认弹窗标题 — Confirmation Dialog Titles
// ===================================================================
'dialog_handle_balance':         'Handle Remaining Balance',               // 处理余额
'dialog_confirm_abandon':        'Confirm Abandonment',                    // 确认放弃
'dialog_confirm_delete':         'Confirm Deletion',                       // 确认删除
'dialog_confirm_clear':          'Confirm Clear Balance',                  // 确认清空
'dialog_confirm_modify':         'Confirm Changes',                        // 确认修改
// ===================================================================
//  滑动设置 — Swipe Settings
// ===================================================================
'swipe_enable':                  'Enable Card Swipe',                      // 启用卡片滑动
'swipe_left':                    'Swipe Left',                             // 左滑
'swipe_right':                   'Swipe Right',                            // 右滑
'swipe_left_action':             'Left Swipe Action',                      // 左滑操作
'swipe_right_action':            'Right Swipe Action',                     // 右滑操作
'dialog_select_action':          'Select Action',                          // 选择操作
'action_select_left':            'Select Left Swipe Action',               // 选择左滑操作
'action_select_right':           'Select Right Swipe Action',              // 选择右滑操作
'action_none':                   'None',                                   // 无
'action_sheet':                  'Open Menu',                              // 打开菜单
'action_more_short':             'More',                                   // 更多
'action_note':                   'Edit Note',                              // 编辑备注
'action_target':                 'Edit Target',                            // 修改目标
// ===================================================================
//  空状态提示 — Empty States
// ===================================================================
'empty_jars':                    'No Piggy Banks Yet',                     // 还没有存钱罐
'empty_jars_hint':               'Tap the button in the corner to create one',
'empty_bills':                   'No Transactions Yet',                    // 暂无交易记录
'empty_bills_hint':              'Your deposits and withdrawals will show up here',
// ===================================================================
//  日期与时间 — Date & Time
// ===================================================================
'date_today':                    'Today',                                  // 今天
'date_yesterday':                'Yesterday',                              // 昨天
'date_sun':                      'Sunday',                                 // 星期日
'date_mon':                      'Monday',                                 // 星期一
'date_tue':                      'Tuesday',                                // 星期二
'date_wed':                      'Wednesday',                              // 星期三
'date_thu':                      'Thursday',                               // 星期四
'date_fri':                      'Friday',                                 // 星期五
'date_sat':                      'Saturday',                               // 星期六
'time_am':                       'AM',                                     // 上午
'time_pm':                       'PM',                                     // 下午
// ===================================================================
//  账单类型 — Transaction Types
// ===================================================================
'bill_type_withdraw':            'Withdrawal',                             // 取出
'bill_type_deposit':             'Deposit',                                // 存入
'bill_type_clear':               'Cleared',                                // 清空
// ===================================================================
//  通用按钮 — Common Buttons
// ===================================================================
'btn_cancel':                    'Cancel',                                 // 取消
'btn_confirm':                   'Confirm',                                // 确定
'btn_ok':                        'OK',                                     // 确定
'btn_save':                      'Save',                                   // 保存
'btn_close':                     'Close',                                  // 关闭
'btn_back':                      'Back',                                   // 返回
'btn_create':                    'Create',                                 // 创建
'btn_abandon':                   'Abandon Balance',                        // 放弃余额
'btn_transfer_default':          'Transfer to Default',                    // 转移至默认
'btn_continue':                  'Keep Going',                             // 继续加油
// ===================================================================
//  提示消息 — 校验类 — Validation Messages
// ===================================================================
'msg_input_name':                'Please enter a name for the piggy bank',
'msg_invalid_target':            'Please enter a valid target amount',
'msg_create_success':            'Piggy bank created successfully',
'msg_op_fail_retry':             'Something went wrong. Please try again.',
'msg_name_empty':                'Name cannot be empty',
'msg_op_fail_reselect':          'Something went wrong. Please select again.',
'msg_rename_success':            'Renamed successfully',
'msg_note_saved':                'Note saved',
'msg_target_saved':              'Target updated',
'msg_delete_success':            'Deleted successfully',
'msg_cannot_delete_default':     'The default piggy bank cannot be deleted',
'msg_cannot_rename_default':     'The default piggy bank cannot be renamed',
'msg_name_exists':               'This name is already taken. Please choose a different one.',
'msg_name_illegal':              'This name contains invalid characters. Please revise it.',
'msg_name_too_long':             'Name cannot exceed 25 characters',
'msg_name_empty_space':          'Name cannot be empty or consist only of spaces',
'msg_target_gt_zero':            'Target amount must be greater than zero',
'msg_amount_gt_zero':            'Amount must be greater than zero',
'msg_insufficient_balance':      'Insufficient balance',
'msg_deposit_success':           'Successfully deposited {amount}',
'msg_withdraw_success':          'Successfully withdrew {amount}',
'msg_transfer_delete':           'Transferred {amount} and deleted',
'msg_balance_zero':              'Balance is already zero. Nothing to clear.',
'msg_clear_balance':             'Cleared balance of {amount}',
'msg_exit_app':                  'Press back again to exit',
'msg_backup_dev':                'Backup is under development. Stay tuned.',
'msg_confirm_clear_all':         'Are you sure you want to clear all data?',
'msg_confirm_clear_all_final':   'This will permanently delete all piggy banks and transaction records. This action cannot be undone. Continue?',
'msg_data_cleared':              'All data has been permanently cleared',
'msg_clear_fail':                'Failed to clear data. Please try again.',
'msg_confirm_reset_settings':    'Restore all settings to their defaults? (Your piggy bank data will not be affected.)',
'msg_settings_reset':            'Settings have been restored to defaults',
'msg_reset_fail':                'Failed to reset settings. Please try again.',
'msg_swipe_saved':               'Swipe settings saved',
'msg_action_updated':            'Action updated',
'msg_input_valid_amount':        'Please enter a valid amount',
'msg_target_lower_confirm':      'The new target is lower than your current balance. Update anyway?',
'msg_not_target_type':           'This piggy bank is not a target type',
// ===================================================================
//  提示消息 — 确认类 — Confirmation Messages
// ===================================================================
'msg_confirm_abandon':           'Abandon the balance of {amount} and delete this piggy bank? This action cannot be undone.',
'msg_confirm_delete':            'Delete "{name}"? This action cannot be undone.',
'msg_confirm_clear':             'Clear the balance ({amount}) of "{name}"? This will be recorded as "Cleared Balance" and cannot be undone.',
'msg_handle_balance':            '"{name}" still has a balance of {amount}. How would you like to handle it?',
// ===================================================================
//  备注模板 — Note Templates
// ===================================================================
'note_transfer_from':            'Balance transferred from "{name}"',      // 自"{name}"转入
'note_clear_balance':            'Cleared balance',                        // 清空余额
// ===================================================================
//  问候语（按时间段）— Time-based Greetings
// ===================================================================
'greeting_night_early':          "It's getting late. Get some rest.",      // 夜深了，早点休息呀
'greeting_morning':              'Good morning! A brand-new day begins.',  // 早上好，新的一天开始了
'greeting_forenoon':             'Good morning! Keep saving today.',       // 上午好，今天也要好好存钱哦
'greeting_noon':                 'Good afternoon! Remember to grab lunch.',// 中午好，记得按时吃饭
'greeting_afternoon':            'Good afternoon! Keep growing your savings.',
'greeting_evening_early':        'Good evening! Hope your day went well.', // 傍晚好，今天辛苦了
'greeting_evening':              'Good evening! Welcome back.',            // 晚上好，欢迎回来
'greeting_night_late':           "It's late. Get some rest — see you tomorrow.",
'greeting_default':              'Welcome to Piggy Bank',                  // 欢迎使用存钱罐
// ===================================================================
//  庆祝弹窗 — Celebration Popup
// ===================================================================
'celebrate_title':               '🎉 Goal Achieved!',                      // 达成目标！
'celebrate_desc':                'You have reached your savings target. Incredible work!',
};