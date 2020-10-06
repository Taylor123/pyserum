Search.setIndex({docnames:["index","instructions","market"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","instructions.rst","market.rst"],objects:{"pyserum.enums":{OrderType:[1,1,1,""],Side:[1,1,1,""]},"pyserum.enums.OrderType":{IOC:[1,2,1,""],Limit:[1,2,1,""],PostOnly:[1,2,1,""]},"pyserum.enums.Side":{Buy:[1,2,1,""],Sell:[1,2,1,""]},"pyserum.instructions":{CancelOrderByClientIDParams:[1,1,1,""],CancelOrderParams:[1,1,1,""],ConsumeEventsParams:[1,1,1,""],InitializeMarketParams:[1,1,1,""],MatchOrdersParams:[1,1,1,""],NewOrderParams:[1,1,1,""],SettleFundsParams:[1,1,1,""],cancel_order:[1,3,1,""],cancel_order_by_client_id:[1,3,1,""],consume_events:[1,3,1,""],decode_consume_events:[1,3,1,""],decode_initialize_market:[1,3,1,""],decode_match_orders:[1,3,1,""],initialize_market:[1,3,1,""],match_orders:[1,3,1,""],new_order:[1,3,1,""],settle_funds:[1,3,1,""]},"pyserum.instructions.CancelOrderByClientIDParams":{client_id:[1,2,1,""],market:[1,2,1,""],open_orders:[1,2,1,""],owner:[1,2,1,""],program_id:[1,2,1,""],request_queue:[1,2,1,""]},"pyserum.instructions.CancelOrderParams":{market:[1,2,1,""],open_orders:[1,2,1,""],open_orders_slot:[1,2,1,""],order_id:[1,2,1,""],owner:[1,2,1,""],program_id:[1,2,1,""],request_queue:[1,2,1,""],side:[1,2,1,""]},"pyserum.instructions.ConsumeEventsParams":{event_queue:[1,2,1,""],limit:[1,2,1,""],market:[1,2,1,""],open_orders_accounts:[1,2,1,""],program_id:[1,2,1,""]},"pyserum.instructions.InitializeMarketParams":{asks:[1,2,1,""],base_lot_size:[1,2,1,""],base_mint:[1,2,1,""],base_vault:[1,2,1,""],bids:[1,2,1,""],event_queue:[1,2,1,""],fee_rate_bps:[1,2,1,""],market:[1,2,1,""],program_id:[1,2,1,""],quote_dust_threshold:[1,2,1,""],quote_lot_size:[1,2,1,""],quote_mint:[1,2,1,""],quote_vault:[1,2,1,""],request_queue:[1,2,1,""],vault_signer_nonce:[1,2,1,""]},"pyserum.instructions.MatchOrdersParams":{asks:[1,2,1,""],base_vault:[1,2,1,""],bids:[1,2,1,""],event_queue:[1,2,1,""],limit:[1,2,1,""],market:[1,2,1,""],program_id:[1,2,1,""],quote_vault:[1,2,1,""],request_queue:[1,2,1,""]},"pyserum.instructions.NewOrderParams":{base_vault:[1,2,1,""],client_id:[1,2,1,""],limit_price:[1,2,1,""],market:[1,2,1,""],max_quantity:[1,2,1,""],open_orders:[1,2,1,""],order_type:[1,2,1,""],owner:[1,2,1,""],payer:[1,2,1,""],program_id:[1,2,1,""],quote_vault:[1,2,1,""],request_queue:[1,2,1,""],side:[1,2,1,""]},"pyserum.instructions.SettleFundsParams":{base_vault:[1,2,1,""],base_wallet:[1,2,1,""],market:[1,2,1,""],open_orders:[1,2,1,""],owner:[1,2,1,""],program_id:[1,2,1,""],quote_vault:[1,2,1,""],quote_wallet:[1,2,1,""],vault_signer:[1,2,1,""]},"pyserum.market":{Market:[2,1,1,""],orderbook:[2,0,0,"-"],state:[2,0,0,"-"],types:[2,0,0,"-"]},"pyserum.market.Market":{load:[2,4,1,""],load_asks:[2,4,1,""],load_bids:[2,4,1,""]},"pyserum.market.orderbook":{OrderBook:[2,1,1,""]},"pyserum.market.orderbook.OrderBook":{from_bytes:[2,4,1,""],get_l2:[2,4,1,""]},"pyserum.market.state":{MarketState:[2,1,1,""]},"pyserum.market.state.MarketState":{LAYOUT:[2,4,1,""]},"pyserum.market.types":{AccountFlags:[2,1,1,""],Event:[2,1,1,""],EventFlags:[2,1,1,""],FilledOrder:[2,1,1,""],Order:[2,1,1,""],OrderInfo:[2,1,1,""],Request:[2,1,1,""],ReuqestFlags:[2,1,1,""]},"pyserum.market.types.AccountFlags":{asks:[2,2,1,""],bids:[2,2,1,""],event_queue:[2,2,1,""],initialized:[2,2,1,""],market:[2,2,1,""],open_orders:[2,2,1,""],request_queue:[2,2,1,""]},"pyserum.market.types.Event":{client_order_id:[2,2,1,""],event_flags:[2,2,1,""],fee_tier:[2,2,1,""],native_fee_or_rebate:[2,2,1,""],native_quantity_paid:[2,2,1,""],native_quantity_released:[2,2,1,""],open_order_slot:[2,2,1,""],order_id:[2,2,1,""],public_key:[2,2,1,""]},"pyserum.market.types.EventFlags":{bid:[2,2,1,""],fill:[2,2,1,""],maker:[2,2,1,""],out:[2,2,1,""]},"pyserum.market.types.FilledOrder":{fee_cost:[2,2,1,""],order_id:[2,2,1,""],price:[2,2,1,""],side:[2,2,1,""],size:[2,2,1,""]},"pyserum.market.types.Order":{client_id:[2,2,1,""],fee_tier:[2,2,1,""],info:[2,2,1,""],open_order_address:[2,2,1,""],open_order_slot:[2,2,1,""],order_id:[2,2,1,""],side:[2,2,1,""]},"pyserum.market.types.OrderInfo":{price:[2,2,1,""],price_lots:[2,2,1,""],size:[2,2,1,""],size_lots:[2,2,1,""]},"pyserum.market.types.Request":{client_order_id:[2,2,1,""],fee_tier:[2,2,1,""],max_base_size_or_cancel_id:[2,2,1,""],native_quote_quantity_locked:[2,2,1,""],open_order_slot:[2,2,1,""],open_orders:[2,2,1,""],order_id:[2,2,1,""],request_flags:[2,2,1,""]},"pyserum.market.types.ReuqestFlags":{bid:[2,2,1,""],cancel_order:[2,2,1,""],ioc:[2,2,1,""],new_order:[2,2,1,""],post_only:[2,2,1,""]},pyserum:{enums:[1,0,0,"-"],instructions:[1,0,0,"-"],market:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"],"4":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:function","4":"py:method"},terms:{"4ckmdggdxqopdlukdt3vhgsakza3qrdnq5ywwy4susjn":2,"class":[1,2],"enum":0,"int":2,"new":1,"static":2,_intern:2,account_flag:2,accountflag:2,alia:[1,2],api:2,ask:[1,2],base_lot_s:1,base_mint:1,base_mint_decim:2,base_vault:1,base_wallet:1,bid:[1,2],book:2,buffer:2,bui:1,cancel:1,cancel_ord:[1,2],cancel_order_by_client_id:1,cancelorderbyclientidparam:1,cancelorderparam:1,client:[1,2],client_id:[1,2],client_order_id:2,conn:2,construct:[0,2],consum:1,consume_ev:1,consumeeventsparam:1,contain:2,content:0,core:2,creat:2,decod:[1,2],decode_consume_ev:1,decode_initialize_market:1,decode_match_ord:1,depth:2,dex:0,event:[1,2],event_flag:2,event_queu:[1,2],eventflag:2,factori:2,fee_cost:2,fee_rate_bp:1,fee_tier:2,field:[1,2],fill:2,filledord:2,from_byt:2,fund:1,gener:1,get:2,get_l2:2,given:2,index:0,info:2,inform:2,init:1,initi:[1,2],initialize_market:1,initializemarketparam:1,instial:1,instruct:0,ioc:[1,2],layout:2,level:2,lib:2,limit:1,limit_pric:1,list:2,load:2,load_ask:2,load_bid:2,maker:2,market:[0,1],market_address:2,market_st:2,marketst:2,match:1,match_ord:1,matchordersparam:1,max_base_size_or_cancel_id:2,max_quant:1,method:2,modul:0,native_fee_or_reb:2,native_quantity_paid:2,native_quantity_releas:2,native_quote_quantity_lock:2,new_ord:[1,2],neworderparam:1,number:[1,2],open_ord:[1,2],open_order_address:2,open_order_slot:2,open_orders_account:1,open_orders_slot:1,order:[1,2],order_id:[1,2],order_typ:1,orderbook:[0,1],orderinfo:2,ordertyp:1,out:2,owner:1,page:0,param:1,parsed_market:2,payer:1,place:1,post_onli:2,postonli:1,price:2,price_lot:2,program_id:[1,2],public_kei:2,publickei:2,pyserum:[1,2],quote_dust_threshold:1,quote_lot_s:1,quote_mint:1,quote_mint_decim:2,quote_vault:1,quote_wallet:1,repres:2,request:2,request_flag:2,request_queu:[1,2],retriev:1,reuqestflag:2,rpc:2,search:0,sell:1,sequenc:2,serum:[0,1],settl:1,settle_fund:1,settlefundsparam:1,side:[1,2],size:2,size_lot:2,slab:2,solana:[1,2],sourc:[1,2],specif:1,state:0,struct:2,trade:1,transact:1,transactioninstruct:1,type:[0,1],under:0,vault_sign:1,vault_signer_nonc:1},titles:["Welcome to pyserum\u2019s documentation!","DEX Instructions","Serum Market"],titleterms:{"enum":1,dex:1,document:0,indic:0,instruct:1,market:2,orderbook:2,pyserum:0,serum:2,state:2,tabl:0,type:2,welcom:0}})